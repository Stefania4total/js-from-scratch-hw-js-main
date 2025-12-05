

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, name, newValue) {
  if (name in gallery) {
    gallery[name] = newValue
    return gallery;
  }
}

console.log(updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506'));

