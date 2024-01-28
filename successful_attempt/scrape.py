import requests
import json
from urllib.request import urlretrieve
from pathlib import Path

ENGINE = "google_images"
QUERIES = ['flat earth', 'mechanical birds']
API = '5cad1b120cc2cbdd06baf4c0bc984c68314dc269e66f04b49bd07b56f49bf65a'
URL = "https://serpapi.com/search.json?q={}&engine={}&api_key={}"

for q in QUERIES:

    if not Path('images/{}.json'.format('_'.join(q.split()))).exists():
        search = requests.get(URL.format(q, ENGINE, API))
        imgs = search.json()['images_results']
        
        with open('images/{}.json'.format('_'.join(q.split())), 'w') as f:
            json.dump(imgs, f)
    
    path = Path('images/{}.json'.format('_'.join(q.split())))
    
    with open(path) as f:
        imgs = json.load(f)

    # Save urls
    with open('images/{}/urls.txt'.format('_'.join(q.split())), 'w') as f:
        # Download images
        for i, img in enumerate(imgs):
            f.write(img['thumbnail'] + '\n')
            urlretrieve(img['thumbnail'], 'images/{}/{}.jpg'.format('_'.join(q.split()), i))
