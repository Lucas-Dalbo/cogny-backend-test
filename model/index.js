const { DATABASE_SCHEMA } = require('../config');
const { dbConnector } = require('../db');

// Call start
(async () => {
    console.log('main.js: before start');

    const db = await dbConnector();

    const execFileSql = async (schema, type) => {
        return new Promise(async resolve => {
            const objects = db['user'][type];

            if (objects) {
                for (const [key, func] of Object.entries(objects)) {
                    console.log(`executing ${schema} ${type} ${key}...`);
                    await func({
                        schema: DATABASE_SCHEMA,
                    });
                }
            }

            resolve();
        });
    };

    //public
    const migrationUp = async () => {
        return new Promise(async resolve => {
            await execFileSql(DATABASE_SCHEMA, 'schema');

            //cria as estruturas necessarias no db (schema)
            await execFileSql(DATABASE_SCHEMA, 'table');
            await execFileSql(DATABASE_SCHEMA, 'view');

            console.log(`reload schemas ...`)
            await db.reload();

            resolve();
        });
    };

    try {
        await migrationUp();

        //exemplo de insert
        // const result1 = await db[DATABASE_SCHEMA].api_data.insert({
        //     doc_record: { 'a': 'b' },
        // })
        // console.log('result1 >>>', result1);

        //exemplo select
        // const result2 = await db[DATABASE_SCHEMA].api_data.find({
        //     is_active: true
        // });
        // console.log('result2 >>>', result2);

        // exemplo de exclusão
        // const result3 = await db[DATABASE_SCHEMA].api_data.destroy(result1.id)
        // console.log('result3 >>>', result3);

    } catch (e) {
        console.log(e.message)
    } finally {
        console.log('finally');

    }
    console.log('main.js: after start');
})();