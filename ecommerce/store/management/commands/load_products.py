import csv
from django.core.management.base import BaseCommand
from store.models import Product, Department

class Command(BaseCommand):
    help = 'Load products from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='The path to the CSV file containing product data')

    def handle(self, *args, **kwargs):
        
        with open('products.csv', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                department, _ = Department.objects.get_or_create(name=row['department'])
                Product.objects.create(
                    name=row['name'],
                    description=row['description'],
                    price=row['price'],
                    department=department
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded products from CSV file'))