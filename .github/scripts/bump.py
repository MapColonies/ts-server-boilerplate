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
    github_token = os.environ.get("GITHUB_TOKEN") 
    # Use sed to replace the version line
    subprocess.run(["sed", "-i", f"s/^version: .*/version: {new_version}/", chart_path])
    # TODO: check if really necessary 
    subprocess.run(["git", "config", "--global", "user.email", "github-actions@github.com"])
    subprocess.run(["git", "config", "--global", "user.name", "GitHub Actions"])
    subprocess.run(["git", "add", chart_path])
    subprocess.run(["git", "commit", "-m", f"chore(release): bump version to {new_version}"])
    subprocess.run(["git", "push", "origin", "master"])


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
    new_version = bump_version_segments(get_chart_version())
    change_version_in_chart(new_version)
    print(f"Bumped version to {new_version}")
