import csv

shellsList = []

with open("Qshells.csv", "r") as f:
    reader = csv.reader(f, delimiter=",")
    for i, line in enumerate(reader):
        if "(SHELL)" in line[0]:
            # print(line[0] + " " + line[4])
            shellsList.append(line[4])

finalPaste = "const shellsListP = ["
for num in shellsList:
    finalPaste = finalPaste + num + ", "
finalPaste = finalPaste[0:-2] + "];"

with open("ShellToPaste.txt", "w", encoding="utf-8") as file:
    file.write(finalPaste)
with open("ShellPasted.js", "w", encoding="utf-8") as file:
    file.write(finalPaste)