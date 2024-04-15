{{/*
Expand the name of the chart.
*/}}
{{- define "ts-server-boilerplate.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "ts-server-boilerplate.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "ts-server-boilerplate.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "ts-server-boilerplate.labels" -}}
helm.sh/chart: {{ include "ts-server-boilerplate.chart" . }}
{{ include "ts-server-boilerplate.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Returns the tag of the chart.
*/}}
{{- define "ts-server-boilerplate.tag" -}}
{{- default (printf "v%s" .Chart.AppVersion) .Values.image.tag }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "ts-server-boilerplate.selectorLabels" -}}
app.kubernetes.io/name: {{ include "ts-server-boilerplate.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Returns the environment from global if exists or from the chart's values, defaults to development
*/}}
{{- define "ts-server-boilerplate.environment" -}}
{{- if .Values.global.environment }}
    {{- .Values.global.environment -}}
{{- else -}}
    {{- .Values.environment | default "development" -}}
{{- end -}}
{{- end -}}

{{/*
Returns the tracing url from global if exists or from the chart's values
*/}}
{{- define "ts-server-boilerplate.tracingUrl" -}}
{{- if .Values.global.tracing.url }}
    {{- .Values.global.tracing.url -}}
{{- else if .Values.env.tracing.url -}}
    {{- .Values.env.tracing.url -}}
{{- end -}}
{{- end -}}

{{/*
Returns the tracing url from global if exists or from the chart's values
*/}}
{{- define "ts-server-boilerplate.metricsUrl" -}}
{{- if .Values.global.metrics.url }}
    {{- .Values.global.metrics.url -}}
{{- else -}}
    {{- .Values.env.metrics.url -}}
{{- end -}}
{{- end -}}

{{/*
Return the proper image name
*/}}
{{- define "ts-server-boilerplate.image" -}}
{{ include "common.images.image" (dict "imageRoot" .Values.image "global" .Values.global) }}
{{- end -}}


{{/*
Return the proper Docker Image Registry Secret Names
*/}}
{{- define "ts-server-boilerplate.imagePullSecrets" -}}
{{ include "common.images.renderPullSecrets" (dict "images" (list .Values.image) "context" $) }}
{{- end -}}

{{/*
Return the proper image pullPolicy
*/}}
{{- define "ts-server-boilerplate.pullPolicy" -}}
{{ include "common.images.pullPolicy" (dict "imageRoot" .Values.image "global" .Values.global) }}
{{- end -}}

{{/*
Return the proper image deploymentFlavor
*/}}
{{- define "ts-server-boilerplate.deploymentFlavor" -}}
{{ include "common.images.deploymentFlavor" (dict "imageRoot" .Values.image "global" .Values.global) }}
{{- end -}}
