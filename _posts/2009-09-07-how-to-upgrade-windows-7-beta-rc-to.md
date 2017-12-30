---
title: 'How to upgrade Windows 7 Beta / RC to the Final RTM'
date: 2009-09-07 00:00:00 
tags: development

class: post-template
subclass: 'post'
layout: post
current: post
author: jonmholt
navigation: true
---
I was suffering through taking my Windows 7 RC (7100) install up to the RTM edition.  Microsoft, if you can believe it, wants you to backup all your files and settings, wipe the thing, re-install, then replace the files and settings.  Uh...no.  So after an hour of pulling my hair out, I stubled across this comment by Roland Smeets and thought I would repost on the off chance someone else might be looking for this kind of info.<a name="more"></a>

Credit to Roland Smeets as originally posted as a comment to [http://technet.microsoft.com/en-us/library/dd446674(WS.10).aspx](http://technet.microsoft.com/en-us/library/dd446674(WS.10).aspx)
> Microsoft recommends Windows 7 beta or RC users to perform a clean or fresh installation of Windows 7 RTM, and uses Windows Easy Transfer to save and transfer user accounts, Windows settings, program settings, personal customizations and files from current installation to newly installed Windows 7 RTM system.The mechanism built into Windows 7 RTM to block and prevent upgrade from all pre-release versions of Windows 7 earlier than build 7233 for client edition, including Windows 7 Beta Build 7000 and Windows 7 RC Build 7100\. For Windows Server 2008 R2, users can directly in-place upgrade from Windows Server 2008 R2 RC.
> 
> However, the hack similar to [upgrade from Windows 7 Beta to RC](http://www.mydigitallife.info/2009/04/22/hack-to-upgrade-windows-7-from-beta-or-pre-rc-to-rc-70xx-to-71xx-version-directly/) can be used to hack the Windows 7 RTM installation DVD ISO to circumvent and bypass the blockage, in order not to be forced to exit gracefully from the upgrade.
> 
> 1.  Copy or download the Windows 7 RTM ISOto the computer that wants to perform the upgrade.
> 2.  Mount the ISO image onto a virtual DVD drive and copy the whole content of the image to folder which can be located anywhere (on any partition or drive on the machine running the pre-release build, or external hard disk or USB/FireWire flash drive connected to the computer).
> 
> Alternatively, it’s possible to directly extract the content of the ISO to a desired folder using file extraction tool such as WinRAR.
> 
> 3.  Browse to the **sources** directory.
> 4.  Open the file cversion.ini in a text editor such as Notepad.
> 5.  Modify the MinClient build number to a value lower than the down-level build. For example, change 7233 to 7000.
> 
> Original content of cversion.ini:
> `[HostBuild]
> MinClient=7233.0
> MinServer=7100.0`
> 
> Change it to:
> `[HostBuild]
> MinClient=7000.0
> MinServer=7100.0`
> 
> 6.  Save the file in original place and original name.
> Double click on setup.exe from modified installation files to start Windows 7 installation, and choose Upgrade to in-place upgrade to latest RTM gold build of Windows 7\. The version check will be skipped and bypassed.
