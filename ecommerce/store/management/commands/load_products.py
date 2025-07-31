import csv
from django.core.management.base import BaseCommand
from store.models import Product, Department

class Command(BaseCommand):
    help = 'Load products from a CSV file'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='The path to the CSV file containing product data')

    def handle(self, *args, **kwargs):
        
        with open('products.csv', newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                department, _ = Department.objects.get_or_create(name=row['department'])
                Product.objects.create(
                    
                    cost=row['cost'],
                    category = row['category'],
                    name=row['name'],
                    brand = row['brand'],
                    retail_price = row['retail_price'],
                    department = row[department],
                    description=row['description'],
                    
                    inventory = row['inventory'],
                    created_at = datetime.strptime(row['created_at'], "%Y-%m-%d")
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded products from CSV file'))