# Generated by Django 4.2.15 on 2024-08-09 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basket', '0003_product_img_src'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='quantity',
            field=models.IntegerField(default=100),
            preserve_default=False,
        ),
    ]