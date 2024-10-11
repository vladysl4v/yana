package main

import (
	"log"
	"net/http"
	"yana/server/controller"
)

const (
	GetAll = "GET /api/notes"
	GetById = "GET /api/notes/{id}"
	Add = "POST /api/notes"
	Remove = "DELETE /api/notes/{id}"
)

func main() {
	http.HandleFunc(Add, controller.HandleAdd)
	http.HandleFunc(GetAll, controller.HandleGetAll)
	http.HandleFunc(GetById, controller.HandleGetById)
	http.HandleFunc(Remove, controller.HandleRemove)
	log.Println("Server started at http://localhost:3071")
	log.Fatal(http.ListenAndServe(":3071", nil))
}