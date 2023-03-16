import os;

downloads_dirctory = '../../../../../downloads'
folder = []
obj= os.scandir(downloads_dirctory)
with obj as entries:
    if not entries:
        print("no downloads in folder") 
    else:
        for entry in entries:
            NAME = entry.path
            DIR = os.system(f"rm -rf {NAME}")
            sub = (NAME,DIR)
            folder.append(NAME)
            # print(NAME)
obj.close()

for subFolder in folder:
    print(subFolder)   

print(f"the folder aţ has {len(folder)} items")

'''now i need to know when a user adds something to the downloads folder'''
  