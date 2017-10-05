import { Client } from 'pg';

let connectionObject = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'tododb',
    password: 'aishwarya',
    port: 5432
}

let client = new Client(connectionObject);
client.connect();

export async function fetchAll() {
    try {
        let fetchrow = await client.query("Select * from todo order by id");
        return fetchrow.rows;
    } catch (e) {
        throw e;
    }
}

export async function fetchById(id) {
    try {
        let fetchrow = await client.query("Select * from todo where id=$1", [id]);
        console.log(fetchrow);
        return fetchrow.rows[0];
    } catch (e) {
        throw e;
    }
}

export async function insert(title, description, iscomplete) {
    try {
        let insertrow = await client.query("Insert into todo (title,description,iscomplete) values ($1,$2,$3)", [title, description, iscomplete]);
        if (insertrow !== null) {
            let row = await client.query("select * from todo where oid=$1", [insertrow.oid]);
            return row.rows[0];
        }
    } catch (e) {
        throw e;
    }
}

export async function deleteById(id) {
    try {
        let deleterow = await client.query("DELETE from todo where id=$1", [id]);

        return deleterow;
    } catch (e) {
        throw e;
    }
}

export async function putById(id, title, description, iscomplete) {
    try {
        let fetchrow = await client.query("UPDATE todo SET title = $1, description = $2, iscomplete = $3 WHERE id=$4", [title, description, iscomplete, id]);
        if (fetchrow !== null) {
            let fetchrow = await client.query("Select * from todo where id=$1", [id]);
            return fetchrow.rows;
        }
    } catch (e) {
        throw e;
    }
}
