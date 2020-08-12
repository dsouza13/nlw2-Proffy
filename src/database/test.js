const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {

    } 

    classValue = {
        // o proffy id virá pelo banco de dados

    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {

        },
        {

        }
    ]

    // await createProffy(db , {proffyValue, classValue, classScheduleValue})
    // Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

        // ex: o horário que a pessoa trabalha, é das 8h-18h
        // o horário do time_from (8h) precisa ser menor ou igual ao horário buscado
        // o time_to precisa ser acima

        const selectClassesSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = ""
            AND class_schedule.weekday = ""
            AND class_schedule.time_from <= ""
            AND class_schedule.time_to > ""
        `)
})