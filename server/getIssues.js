// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'GloriousGlider8',
    repo: 'TerminalPlus',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })