{{- define "todo.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "todo.name" -}}
{{- printf "%s" .Chart.Name -}}
{{- end -}}
