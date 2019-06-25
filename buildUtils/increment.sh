#!/bin/bash


#$ ./increment_version.sh
#usage: increment_version.sh [-Mmp] major.minor.patch
#
#$ ./increment.sh -p 0.0.0
#0.0.1
#
#$ ./increment.sh -m 0.0.3
#0.1.0
#
#$ ./increment.sh -M 1.1.15
#2.0.0
#
#$ ./increment.sh -Mmp 2.3.4
#3.1.1

# Increment a version string using Semantic Versioning (SemVer) terminology.

# Parse command line options.

while getopts ":Mmp" Option
do
  case $Option in
    M ) major=true;;
    m ) minor=true;;
    p ) patch=true;;
  esac
done

shift $(($OPTIND - 1))

version=$1

# Build array from version string.

a=( ${version//./ } )

# If version string is missing or has the wrong number of members, show usage message.

if [ ${#a[@]} -ne 3 ]
then
  echo "usage: $(basename $0) [-Mmp] major.minor.patch"
  exit 1
fi

# Increment version numbers as requested.

if [ ! -z $major ]
then
  ((a[0]++))
  a[1]=0
  a[2]=0
fi

if [ ! -z $minor ]
then
  ((a[1]++))
  a[2]=0
fi

if [ ! -z $patch ]
then
  ((a[2]++))
fi

echo "${a[0]}.${a[1]}.${a[2]}"