const CountService = {
    getAllCounts(knex) {
        console.log(knex)
        return knex.select('*').from('counts')
    },
    updateCounts(knex, newCount, name) {
        return knex('counts')
        .where({ name: name })
        .update({
            counts: newCount
        })
        .returning('*')
    }
}

module.exports = CountService