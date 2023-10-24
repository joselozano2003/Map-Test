from flask import Flask, request, Response
from pymbtiles import MBtiles
from PIL import Image
from io import BytesIO

app = Flask(__name__)

@app.route('/get_tile_data', methods=['GET'])
def get_tile_data():
    zoom = float(request.args.get('z'))
    x = float(request.args.get('x'))
    y = float(request.args.get('y'))

    mbtiles_file = "mappro.mbtiles"

    with MBtiles(mbtiles_file) as src:
        tile_data = src.read_tile(z=zoom, x=x, y=y)

    # You may need to further process the tile_data if it's in binary format
    image = Image.open(BytesIO(tile_data))

    # Save the image as a PNG file
    image.save('tile_image.png', 'PNG')

    return jsonify({"message": "Tile data saved as tile_image.png"})

if __name__ == '__main__':
    app.run(debug=True)