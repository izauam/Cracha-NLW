const linksRedesSociais = {
  github: 'izauam',
  youtube: 'channel/UC-TMWBAv3YL93nCI6gRRehg',
  facebook: 'izau.araujo',
  instagram: 'izauaraujo',
  twitter: 'izauaraujo',
};

function chmarLinksRedesSociais() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${linksRedesSociais[social]}`;
  }
}

chmarLinksRedesSociais();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksRedesSociais.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      nomeUsuario.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
