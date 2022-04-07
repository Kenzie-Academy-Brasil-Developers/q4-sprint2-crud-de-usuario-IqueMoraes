function capitalizeTitle(title: string) {
  return title.split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
}

export default capitalizeTitle;