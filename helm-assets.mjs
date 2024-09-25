#!/usr/bin/env zx
$.shell = '/bin/bash';
$.verbose = false;
$.cwd = './helm';

const promise = ($`helm dependency update`);
await promise.then((data) => {
    $`tar -xOzf charts/helm-common-*.tgz "helm-common/values.yaml" > "maximal-values.yaml"`;
});

const tgzFile = 'helm-common-';
const files = (await $`tar -tzf charts/${tgzFile}*.tgz | grep "\/schemas" | grep '\\-schema.json'`).stdout.split('\n');

for (const file of files) {
    if (file) {
        await $`tar -xOzf charts/${tgzFile}*.tgz "${file}" > "schemas/${file.split('/').pop()}"`;
    }
}