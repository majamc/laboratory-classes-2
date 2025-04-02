// 🔄 Refactoro the Changer  
// Przenieś teraz odpowiednie wywołania logów z routing.js i zastąp tam logowanie bezpośrednie wywołaniem tych funkcji.

const getInfoLog = (method, url) => {
  const date = new Date().toISOString();
  console.info(`INFO [${date}]: ${method} - ${url}`);
};

const getErrorLog = (url) => {
  const date = new Date().toISOString();
  console.error(`ERROR [${date}]: requested url ${url} doesn't exist.`);
};

const getProcessLog = () => {
  const date = new Date().toISOString();
  console.log(`PROCESS [${date}]: logout has been initiated and the application will be closed.`);
};

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};
