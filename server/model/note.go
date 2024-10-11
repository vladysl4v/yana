package model

import "time"

type Note struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Text     string `json:"text"`
	CreatedAt time.Time `json:"createdAt"`
}