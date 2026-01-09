import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionResult = await database.query("SHOW server_version;");
  const versionValue = versionResult.rows[0].server_version;

  const openConectionsResult = await database.query(
    "SELECT * FROM pg_stat_activity WHERE datname = 'local_db';",
  );
  const openConections = openConectionsResult.rows.length;
  console.log(openConections);

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionsResult.rows[0].max_connections;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: versionValue,
        max_connections: parseInt(maxConnections),
        open_connections: openConections,
      },
    },
  });
}

export default status;
