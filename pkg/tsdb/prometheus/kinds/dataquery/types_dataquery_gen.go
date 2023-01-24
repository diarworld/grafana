// Code generated - EDITING IS FUTILE. DO NOT EDIT.
//
// Generated by:
//     public/app/plugins/gen.go
// Using jennies:
//     PluginGoTypesJenny
//
// Run 'make gen-cue' from repository root to regenerate.

package dataquery

// Defines values for EditorMode.
const (
	EditorModeBuilder EditorMode = "builder"

	EditorModeCode EditorMode = "code"
)

// Defines values for QueryEditorMode.
const (
	QueryEditorModeBuilder QueryEditorMode = "builder"

	QueryEditorModeCode QueryEditorMode = "code"
)

// PrometheusDataQuery defines model for PrometheusDataQuery.
type PrometheusDataQuery struct {
	// For mixed data sources the selected datasource is on the query level.
	// For non mixed scenarios this is undefined.
	// TODO find a better way to do this ^ that's friendly to schema
	// TODO this shouldn't be unknown but DataSourceRef | null
	Datasource *interface{} `json:"datasource,omitempty"`

	// Code or Builder mode
	EditorMode *EditorMode `json:"editorMode,omitempty"`
	Exemplar   *bool       `json:"exemplar,omitempty"`
	Expr       string      `json:"expr"`
	Format     *string     `json:"format,omitempty"`

	// true if query is disabled (ie should not be returned to the dashboard)
	Hide           *bool   `json:"hide,omitempty"`
	Hinting        *bool   `json:"hinting,omitempty"`
	Instant        *bool   `json:"instant,omitempty"`
	Interval       *string `json:"interval,omitempty"`
	IntervalFactor *int64  `json:"intervalFactor,omitempty"`
	IntervalMs     *int64  `json:"intervalMs,omitempty"`

	// Unique, guid like, string used in explore mode
	Key *string `json:"key,omitempty"`

	// Specify the query flavor
	// TODO make this required and give it a default
	QueryType *string `json:"queryType,omitempty"`
	Range     *bool   `json:"range,omitempty"`

	// A - Z
	RefId        string `json:"refId"`
	ShowingGraph *bool  `json:"showingGraph,omitempty"`
	ShowingTable *bool  `json:"showingTable,omitempty"`
}

// Code or Builder mode
type EditorMode string

// QueryEditorMode defines model for QueryEditorMode.
type QueryEditorMode string
