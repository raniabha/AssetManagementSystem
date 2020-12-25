import React, { Component } from 'react'

export default class ToDoList extends Component {
    render() {
        return (
            <div class="container">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
            </div>
        )
    }
}
