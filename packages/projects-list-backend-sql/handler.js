import { knexConnect } from '../../libs/knex-connect';

const knex = knexConnect({
  database: 'projects',
});

async function readProjects(orgId = 1) {
  try {
    const projects = await knex('projects').where('orgId', orgId);
    return projects;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function main(event, context) {
  console.log(event);
  console.log(context);
  try {
    const projects = await readProjects();
    return {
      statusCode: 200,
      body: JSON.stringify(projects)
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: `Hello World! from projects-list-backend-sql`,
    };
  }
}
