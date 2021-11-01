const getHash = (index = 1) => location.hash.slice(1).toLocaleLowerCase().split('/')[index] || '/';

export default getHash;