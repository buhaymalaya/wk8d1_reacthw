import React from 'react'
import '../styles/forms.css';

export default function Forms() {
    return (
        <form>
          <label>
            Full Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }