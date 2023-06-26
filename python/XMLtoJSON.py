import xmltodict
import json

def convert_xml_to_json(xml_file, json_file):
    with open(xml_file, 'r') as file:
        # Lire le contenu du fichier XML
        xml_content = file.read()

    # Convertir le XML en un dictionnaire Python
    data_dict = xmltodict.parse(xml_content)

    # Convertir le dictionnaire en JSON
    json_data = json.dumps(data_dict, indent=2)

    with open(json_file, 'w') as file:
        # Écrire le JSON dans le fichier de sortie
        file.write(json_data)

    print(f"Conversion terminée. Le fichier JSON a été enregistré sous : {json_file}")

# Chemin vers le fichier XML
xml_file_path = "sanitationServices.xml"
# Chemin vers le fichier JSON de sortie
json_file_path = 'sanitationServices.json'

# Conversion XML vers JSON et enregistrement dans un fichier
convert_xml_to_json(xml_file_path, json_file_path)
