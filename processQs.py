import csv

qsList = []
choices = []
vals = []

with open("Qweights.csv", "r") as f:
    reader = csv.reader(f, delimiter=",")
    startChoices = 0
    for i, line in enumerate(reader):
        if line[0].isdigit():
            counter = 0
            qsList.append(line[1].replace('"', '\\"'))
            startChoices = 1
        if startChoices:
            choices.append(line[2].replace('"', '\\"'))
            vals.append(line[3:19])

qText = "const qsP =\n["
for i, q in enumerate(qsList):
    qText = qText + "\""
    qText = qText + q
    qText = qText + "\""
    if i != len(qsList) - 1:
        qText = qText + ",\n"
qText = qText + "];\n\n"

cText = "const csListP = \n["
for i, qC in enumerate(choices):
    if i % 5 == 0:
        cText = cText + "["
        cText = cText + "\"" + qC + "\"," 
    elif i % 5 == 4:
        cText = cText + "\"" + qC + "\"" 
        cText = cText + "],\n"
    else:
        cText = cText + "\"" + qC + "\"," 
cText = cText[0:len(cText)-2] + "];\n\n"

# wText = "const wCultivation = \n["
# for i, qW in enumerate(vals):
#     currW = qW[0]
#     if currW == "":
#         currW = "0"
#     if i % 5 == 0:
#         wText = wText + "["
#         wText = wText + "\"" + currW + "\"," 
#     elif i % 5 == 4:
#         wText = wText + "\"" + currW + "\"" 
#         wText = wText + "],\n"
#     else:
#         wText = wText + "\"" + currW + "\"," 
# wText = wText[0:len(wText)-2] + "];"
def getWeightText(vals, myIndex, constName):
    wText = "const " + constName + "= \n["
    for i, qW in enumerate(vals):
        currW = qW[myIndex]
        if currW == "":
            currW = "0"
        if i % 5 == 0:
            wText = wText + "["
            wText = wText + "\"" + currW + "\"," 
        elif i % 5 == 4:
            wText = wText + "\"" + currW + "\"" 
            wText = wText + "],\n"
        else:
            wText = wText + "\"" + currW + "\"," 
    wText = wText[0:len(wText)-2] + "];"
    return wText
wCultivation = getWeightText(vals, 0, "wCultivationP") + "\n\n"
wProduction = getWeightText(vals, 1, "wProductionP") + "\n\n"
wFunction = getWeightText(vals, 2, "wFunctionP") + "\n\n"
wDirection = getWeightText(vals, 3, "wDirectionP") + "\n\n"
wDreaming = getWeightText(vals, 4, "wDreamingP") + "\n\n"
wBehaving = getWeightText(vals, 5, "wBehavingP") + "\n\n"
wStriving = getWeightText(vals, 6, "wStrivingP") + "\n\n"
wRisking = getWeightText(vals, 7, "wRiskingP") + "\n\n"
wCohering= getWeightText(vals, 8, "wCoheringP") + "\n\n"
wRecruiting = getWeightText(vals, 9, "wRecruitingP") + "\n\n"
wPursuing = getWeightText(vals, 10, "wPursuingP") + "\n\n"
wReviewing = getWeightText(vals, 11, "wReviewingP") + "\n\n"
wMandate = getWeightText(vals, 12, "wMandateP") + "\n\n"
wProgram = getWeightText(vals, 13, "wProgramP") + "\n\n"
wTime = getWeightText(vals, 14, "wTimeP") + "\n\n"
wSpace = getWeightText(vals, 15, "wSpaceP") + "\n\n"

finalPaste = qText + cText + wCultivation + wProduction + wFunction + wDirection + wDreaming + wBehaving + wStriving + wRisking + wCohering + wRecruiting + wPursuing + wReviewing + wMandate + wProgram + wTime + wSpace 

with open("QsToPaste.txt", "w", encoding="utf-8") as file:
    file.write(finalPaste)
with open("QsPasted.js", "w", encoding="utf-8") as file:
    file.write(finalPaste)