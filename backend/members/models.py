from django.db import models

class Member(models.Model):
    memID = models.AutoField(primary_key=True)
    mem_id = models.CharField(max_length=50, unique=True)
    mem_pwd = models.CharField(max_length=50)
    mem_name = models.CharField(max_length=50)
    mem_nickname = models.CharField(max_length=50)
    mem_gender = models.IntegerField()
    mem_date = models.DateField()
    # scopeID 필드 제거 또는 다른 방식으로 설정
    # scopeID = models.ForeignKey('MovieScope', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.mem_id
