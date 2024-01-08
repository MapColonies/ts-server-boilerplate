import os
import subprocess

def get_chart_version():
    chart_path = os.path.join("helm", "Chart.yaml")

    with open(chart_path, "r") as chart_file:
        for line in chart_file.readlines():
            if line.startswith("version:"):
                version = line.split(":")[1].strip()
                return version
                
    raise Exception('Error with chart version')

def update_chart_version(new_version):
    chart_path = os.path.join("helm", "Chart.yaml")
    commands = f"""
        sed -i 's/^version:.*/version: {new_version}/' {chart_path};
        git config --global user.email 'github-actions@github.com';
        git config --global user.name 'GitHub Actions';
        git add {chart_path};
        git commit -m 'chore(release): bump version to {new_version}';
        git push origin master;
    """

    subprocess.run(commands, shell=True)


def generate_new_version(version):
    # Split the version into segments
    major, minor, patch = map(int, version.split("."))

    patch += 1

    if patch == 10:
        patch = 0
        minor += 1

        if minor == 10:
            minor = 0
            major += 1

    new_version = f"{major}.{minor}.{patch}"
    return new_version

if __name__ == "__main__":
    new_version = generate_new_version(get_chart_version())
    update_chart_version(new_version)
    print(f"Bumped version to {new_version}")

    # Set output for later jobs 
    print(f"::set-output name=NEW_VERSION::{new_version}")

