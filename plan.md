# QuickCode

## a online personal cheetsheet maker

## Features

- Login / Resgister
- Create Cheetsheet category
- add Code on it
- edit cheetsheet
- delete cheetsheet

## Api routes

    <!-- authentication routes ("/api/auth") -->

    login -> POST -> "/login"
    register -> POST -> "/register"


    <!-- cheetsheet routes ("api/cheetsheet") -->

    get all cheetsheets -> GET -> "/"
    get single cheetsheet -> GET -> "/:id"
    add cheetsheet -> POST -> "/"
    update cheetsheet -> PATCH -> "/:id"
    delete cheetsheet -> DELETE -> "/:id"

    <!-- cheetsheet code routes ("api/cheetsheet") -->

    add code on cheetsheet -> POST -> "/:cheetSheetId/codes"
    update code on cheetsheet -> PATCH -> "/:cheetSheetId/codes/:codeid"
    delete code on cheetsheet -> DELETE -> "/:cheetSheetId/codes/:codeid"

## Steps

- Create api in node and express

  - add auth
  - add cheetsheet
  - delete cheetsheet
  - update cheetsheet
  - add code in cheetsheet
  - get categories list
  - get single category

- create desgin for frontend

  - homepage
  - login page
  - register page
  - create Cheetsheet page
  - view cheetsheet page with ( add code , edit & delete cheetsheet button)
  - card to show cheetsheet

- create frontend in nextjs
  - create all the pages in desgine
