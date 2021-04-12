/*
 * Normalização de estruturas
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que realize a
 * normalização da estrutura representada pela variável input de
 * forma que o retorno seja compatível com a variável output
 *
 */

/*
 * [INPUT] Object
 * {
 *   "id": "6197b77e-3942-11ea-a137-2e728ce88125",
 *   "user": {
 *     "id": "6197ba94",
 *     "name": "Laura"
 *   },
 *   "reports": [
 *     {
 *       "id": "51ddf1a9",
 *       "result": {
 *         "document": "356.4325-10",
 *         "status": "em análise",
 *       }
 *     }
 *   ]
 * }
 *
 * [OUTPUT] Object
 *  {
 *   "results": {
 *     "6197b77e-3942-11ea-a137-2e728ce88125": {
 *       id: "6197b77e-3942-11ea-a137-2e728ce88125",
 *       user: "6197ba94",
 *       reports: ["51ddf1a9"]
 *     }
 *   },
 *   "users": {
 *     "6197ba94": { "id": "6197ba94", "name": "Laura" }
 *   },
 *   "reports": {
 *     "51ddf1a9": {
 *        "id": "51ddf1a9",
 *        "user": "6197ba94",
 *        "document": "356.4325-10",
 *        "status": "em análise",
 *      }
 *    }
 *  }
 */

const normalizeData = unormalized => {
  const obj = unormalized;
  const normalized = {
    results: {
      [`${obj.id}`]: {
        id: obj.id,
        user: obj.user.id,
        reports: obj.reports.map(r => r.id),
      },
    },
    users: {
      [`${obj.user.id}`]: {
        id: obj.user.id,
        name: obj.user.name
      }
    },
  };
  normalized.reports = {};
  obj.reports.forEach(r => {
    normalized.reports[`${r.id}`] = {};
    normalized.reports[`${r.id}`].id = r.id;
    normalized.reports[`${r.id}`].user = obj.user.id;
    normalized.reports[`${r.id}`].document = r.result.document;
    normalized.reports[`${r.id}`].status = r.result.status;
  });
  return normalized;
}

module.exports = normalizeData
