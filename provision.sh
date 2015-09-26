#!/usr/bin/env bash

# Mise à jour des dépots
apt-get -qq update

# Configuration de la timezone
echo "Europe/Paris" > /etc/timezone
apt-get install -y tzdata
dpkg-reconfigure -f noninteractive tzdata

# Installation de Apache et PHP
apt-get -y install apache2

# Configuration de Apache
sed -i s/AllowOverride\ None/AllowOverride\ All/g /etc/apache2/sites-enabled/000-default
service apache2 reload

# Mise à disposition du projet dans Apache
rm -r /var/www/*
ln -sf /vagrant/src/web/* /var/www/

# Informations
echo
echo -e "Le site est disponible à l'adresse : http://sylvie.julien.vagrant.dev/"
