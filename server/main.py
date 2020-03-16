########### FILE MANIPULATION ###########

#  Open file 
filename = input("Enter the name of the data file: ")
infile = open(filename, 'r')


# Read data from line
datalist = []

for line in infile: 
    #get data from line 
    date, h, l, r = (line.split(','))
    lowtemp = int(l)
    hightemp = int(h)
    rainfall = float(r)
    m, d, y = date.split('/')
    month = int(m)
    day = int(d)
    year = int(y)

# put data into list 
datalist.append([day, month, year, lowtemp, hightemp, rainfall])


####### ANALYSIS #######

#Get Data of interest from file import datalist

month = int(input("For the dat you care about, enter the month: "))
day = int(input("For the date you care about, enter the date: "))

#Find Historical data for date 
gooddata = []
for singleday in datalist:
    if(singleday == day) and (singleday[1] == month):
        gooddata.append([singleday[2], singleday[3], singleday[4], singleday[5]])

#Perform analysis 

minsofar = 120 
maxsofar = -100
numgooddates = 0 
sumofmin = 0 
sumofmax = 0
for singleday in gooddata:
    numgooddates += 1 
    sumofmin += singleday[1]
    sumofmax += singleday[2]
    if singleday[1] < minsofar:
        minsofar = singleday[1]
    if singleday[2] > maxsofar:
       maxsofar = singleday[2]

avglow = sumofmin / numgooddates
avghigh = sumofmax / numgooddates


####### PRESENT DATA #######

print("There were", numgooddates, "days")
print("The lowest temperature on record was", minsofar)
print("The highest temerature on record was", maxsofar)
print("The average low has been", avglow)
print("The average high has been", avghigh)
