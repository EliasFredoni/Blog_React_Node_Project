//_____________SERVER MIT PORT 7000___________________//

const express = require('express')
const app = express()
const PORT = 7000

//________________ROUTEN DEFINIEREN___________________//

//__________VERKNÜPFUNG MIT MEHREREN SERVERN FRONT AND BACK!_____//

const cors = require('cors')

app.use(cors())

//*********EINE ROUTE ERSTELLT FÜRS JSON*********/ 

app.get('/blogs', (req, res) => {               //get = Anfrage
    res.json(
        [
            {
                vorname: 'elias',
                nachname: 'fredoni',
                bild: 'https://unsplash.it/400/400'
            }
        ]
    )
})

// post = Daten vom CLIENT 

//______________SERVER 7000 STARTET!-----------------//

app.listen(PORT, () => {
    console.log('Server is listening on Port', PORT)
})





