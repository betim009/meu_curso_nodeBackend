const { connection } = require("../../connection");

const getCitiesById = async (req, res) => {
  const { id } = req.params;
  const [[country]] = await connection.execute(
    "SELECT name FROM country where id = ?",
    [id]
  );
  const [cities] = await connection.execute(
    "SELECT * FROM city where country_id = ?",
    [id]
  );

//   cities.forEach((city) => {
//     city.country = country.name;
//   });

  return res.json(cities);
};

module.exports = {
  getCitiesById,
};
