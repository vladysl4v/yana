package controller

import (
	"net/http"
	"path"
	"strconv"
	"yana/server/helper"
	"yana/server/model"
	"yana/server/repository"
)


func HandleAdd(w http.ResponseWriter, r *http.Request) {
	cnr, err := helper.ReadFromRequestBody[model.CreateNoteRequest](r, nil)
	if err != nil {
		http.Error(w, "I dont understand", http.StatusBadRequest)
		return;
	}
	note := repository.Add(cnr.Username, cnr.Text)
	w.WriteHeader(http.StatusCreated)
	helper.WriteToResponseBody(w, note)
}

func HandleGetAll(w http.ResponseWriter, r *http.Request) {
	notes := repository.GetAll()
	w.WriteHeader(http.StatusOK)
	helper.WriteToResponseBody(w, notes)
}

func HandleGetById(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(path.Base(r.URL.Path))
	if err != nil {
		http.Error(w, "Id must be a number", http.StatusBadRequest)
		return;
	}
	note := repository.GetById(id)
	if note == nil {
		http.Error(w, "note not found", http.StatusNotFound)
		return
	}
	w.WriteHeader(http.StatusOK)
	helper.WriteToResponseBody(w, note)
}

func HandleRemove(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(path.Base(r.URL.Path))
	if err != nil {
		http.Error(w, "Id must be a number", http.StatusBadRequest)
		return;
	}
	ok := repository.Remove(id)
	if !ok {
		http.Error(w, "note not found", http.StatusNotFound)
		return
	}
	w.WriteHeader(http.StatusNoContent)
}