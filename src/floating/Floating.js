import React from 'react'
import './floating.css'
import $ from 'jquery'

export default function Floating() {

    $(".container-wrap").append(
        "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
    );

    return (
        <div>
            <ul class='circles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>

            </ul>
        </div>
    )
}
