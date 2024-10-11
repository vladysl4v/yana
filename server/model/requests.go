package model

type CreateNoteRequest struct {
	Username string `json:"username"`
	Text     string `json:"text"`
}