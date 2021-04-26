const CountService = {
    getAllCounts(knex) {
        console.log(knex)
        return knex.select('*').from('counts')
    },
    updateCounts(knex, newCount, dollars, name) {
        return knex('counts')
        .where({ name: name })
        .update({
            counts: newCount,
            dollars: dollars
        })
        .returning('*')
    }
}

module.exports = CountService