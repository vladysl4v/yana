package helper

import (
	"encoding/json"
	"net/http"
)

func WriteToResponseBody(w http.ResponseWriter, res interface{}) {
	w.Header().Add("Content-Type", "application/json")

	endcoder:= json.NewEncoder(w)
	err := endcoder.Encode(res)
	if (err != nil) {
		http.Error(w, "Error encoding response", http.StatusInternalServerError)
	}
}

func ReadFromRequestBody[T any](r *http.Request, req interface{}) (T, error) {
	var item T
	err := json.NewDecoder(r.Body).Decode(&item)
	if (err != nil) {
		return item, err
	}
	return item, nil
}