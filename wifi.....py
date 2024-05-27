import subprocess

def get_wifi_profiles():
    meta_data = sub process.check_output(['netsh','wlan','show','profile'])
    data = meta_data.decode("utf-8")
    data = data.spilt("\n")
    names=[]
    for line in data:
        if "ALL User profile  :" in line:
            name= line.spilt(":")[1]
            names.append(name[1:-1])
            return names

            for name in get_wifi_profile():
                meta_data=subprocess.check_output(['netsh','wlan','show','profile',name,'key=clear'])
                data=meta_data.decode("utf-8",errors="backslashreplace")
                data=data.spilt("\n")
                names=[]
                for line in data :
                    if "key content" in line :
                        password=line.spilt(":")[1]

                        print(name,":",password)


 