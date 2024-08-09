from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=40, help_text='Enter product name')
    price = models.FloatField()
    img_src = models.CharField(max_length=1000, default='https://www.google.com/search?sca_esv=32e484f6156eb8e3&rlz=1C5GCEM_enBG1122BG1122&q=apple+image&tbm=isch&source=lnms&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWERaHdBms7t-tHL1116ec0FnDIxrxgGhNFSZEtYqV91TSiNw_7vO1mgUQ5ZBeky6VGxnZQ_IiLYK56P0Zpj03KysDZT5PGg9mBQAs3JsQeehb-6g_re6JgQFRoQ7-5PdNxcruZPRKrJ6AVfeSwlM4eq84-pw8jcnU__gidphJF81we6BV&sa=X&ved=2ahUKEwiGv4SqweWHAxX8SPEDHQLzEyAQ0pQJegQIFBAB&biw=1440&bih=703&dpr=2#imgrc=ktcxvF5LaXyVXM')
    quantity = models.IntegerField()