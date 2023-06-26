import xml.etree.ElementTree as ET

# Lire le fichier XML
tree = ET.parse("PIB_LAST.xml")
root = tree.getroot()

# Créer une liste pour stocker les éléments sélectionnés
selected_elements = []

# Pour chaque élément "record"
for record in root.findall(".//record"):
    country = record.find(".//field[@name='Country or Area']").text
    year = record.find(".//field[@name='Year']").text

    # Si le pays est Allemagne ou France et l'année est 2020
    if country in [
    "Allemagne",
    "Autriche",
    "Belgique",
    "Bulgarie",
    "Croatie",
    "Danemark",
    "Espagne",
    "Estonie",
    "Finlande",
    "France",
    "Grèce",
    "Hongrie",
    "Irlande",
    "Italie",
    "Lettonie",
    "Lituanie",
    "Luxembourg",
    "Malte",
    "Pays-Bas",
    "Pologne",
    "Portugal",
    "République slovaque",
    "République tchèque",
    "Roumanie",
    "Slovénie",
    "Suède",
    "Chypre",
  ] and year == "2020":
        selected_elements.append(record)

#Création d'un nouveau xml 
new_root = ET.Element("Root")
for element in selected_elements:
    new_root.append(element)

# Ecriture dans un nouveau fichier
tree = ET.ElementTree(new_root)
tree.write("selected_elements.xml", xml_declaration=True, encoding='utf-8')