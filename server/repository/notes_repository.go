package repository

import (
	"yana/server/model"
	"time"
)

var notes = []model.Note {}
var lastId = 0

func Add(username string, text string) model.Note {
	note := model.Note{Id: lastId, Text: text, Username: username, CreatedAt: time.Now()}
	lastId++
	notes = append(notes, note)
	return note
}

func GetAll() []model.Note {
	return notes
}

func GetById(id int) *model.Note {
	for _, note := range notes {
		if note.Id == id {
			return &note
		}
	}
	return nil
}

func Remove(id int) bool {
	for i, note := range notes {
		if note.Id == id {
			notes = append(notes[:i], notes[i+1:]...)
			return true
		}
	}
	return false
}