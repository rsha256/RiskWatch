set DB_IP=184.73.76.65
set DB_PORT=27017

python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

env DB_IP=$DB_IP DB_PORT=$DB_PORT python3 -m flaskstructure.app
