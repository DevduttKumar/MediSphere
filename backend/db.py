import configparser
import os
import pyodbc

_cfg = configparser.ConfigParser()
_base_dir = os.path.dirname(__file__)
_cfg_file = 'config.ini' if os.path.exists(os.path.join(_base_dir, 'config.ini')) else 'config.example.ini'
_cfg.read(os.path.join(_base_dir, _cfg_file))
CONN_STR = ";".join(f"{k}={v}" for k, v in _cfg.items('MSSQL'))

def get_db_connection():
    try:
        return pyodbc.connect(CONN_STR)
    except Exception as e:
        print(f"[DB Error] Connection failed: {e}")
        return None