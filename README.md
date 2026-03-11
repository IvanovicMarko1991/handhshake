# Handshake Check-In App

A small full-stack prototype for managing student and visitor check-ins.

This project uses a Ruby on Rails API backend and a React frontend to support a simple campus/event-style check-in workflow. The backend exposes resources for students and visitors, while the frontend provides pages for listing students, creating records, and submitting a kiosk-style visitor check-in form.

## Overview

The goal of this project is to demonstrate a lightweight check-in system with:

- a Rails API backend
- a React frontend
- basic CRUD endpoints
- form submission for visitor check-in
- simple validation for student and visitor records

## Tech Stack

### Backend
- Ruby 3.0.5
- Rails 6.1
- SQLite
- RSpec
- Rack CORS
- Dotenv

### Frontend
- React 18
- React Router
- Axios
- Material UI

## Current Features

### Students
- List students
- Create student records
- Store first name, last name, and check-in time

### Visitors
- List visitors
- Create visitor check-ins
- Validate required fields
- Validate `.edu` email addresses
- Automatically set check-in time before save

### Frontend flow
- React app with routes for:
  - students list
  - new student form
  - visitor check-in kiosk
  - visitor list
- Visitor form fetches majors from an external endpoint and submits check-in data to the Rails API

## Project Structure

```bash
.
├── app/                    # Rails API backend
├── config/
├── db/
├── spec/                   # RSpec tests
├── handshake-react/        # React frontend
├── Gemfile
└── package.json
```

### API Endpoints
- Students
```
GET /api/v1/students
POST /api/v1/students
GET /api/v1/students/:id
PATCH /api/v1/students/:id
DELETE /api/v1/students/:id
```

- Visitators
```
GET /api/v1/visitators
POST /api/v1/visitators
GET /api/v1/visitators/:id
PATCH /api/v1/visitators/:id
DELETE /api/v1/visitators/:id
```

### Getting Started
- Prerequisites
Make sure you have installled:
 - Ruby 3.0.5
 - Bundler
 - Node.js
 - npm or yarn
 - SQLite

### Backend Setup
- Clone the repository:
```
git clone https://github.com/IvanovicMarko1991/handhshake.git
cd handhshake
```
- Install Ruby gems:
```
bundle install
```
-Setup the database:
```
bin/rails db:create
bin/rails db:migrate
```
-Start the Rails server:
```
bin/rails server
```

### Frontend Setup
- Move into the react app:
```
cd handshake-react
```
- Install dependencies:
```
npm install
```
- Start the frontend
```
npm start
```

### Running Tests
- For the Rails backend
```
bundle exec rspec
```
- For the React frontend
```
cd handshake-react
npm test
```

