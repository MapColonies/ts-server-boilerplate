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


{{/*
Return the proper fully qualified app name
*/}}
{{- define "ts-server-boilerplate.fullname" -}}
{{ include "common.names.fullname" . }}
{{- end -}}

{{/*
Return the proper chart name
*/}}
{{- define "ts-server-boilerplate.name" -}}
{{ include "common.names.name" . }}
{{- end -}}

{{/*
Return the proper chart name
*/}}
{{- define "ts-server-boilerplate.chart" -}}
{{ include "common.names.chart" . }}
{{- end -}}
