/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/// <reference path="Typings/jquery.d.ts" />
(function ($) {
    var hasFocus = function (videoId) {
        var focusedVideoId = $("#media-library-main-list li.has-focus .media-thumbnail-cloud-video").data("id");
        return focusedVideoId == videoId;
    };
    var updateUploadProgressLabel = function () {
        var containers = $("#media-library-main-editor-focus .properties");
        containers.each(function () {
            var container = $(this);
            var statusWrapper = container.find(".upload-status-wrapper");
            var publicationStatusLabel = container.find(".publication-status span");
            var uploadStatusLabel = container.find(".upload-status-text");
            var progressLabel = container.find(".upload-progress-value");
            var uploadProgressContainer = $(".upload-progress-status");
            var statusUrl = statusWrapper.data("status-url");
            var status = statusWrapper.data("upload-status");
            var published = statusWrapper.data("published");
            var videoId = statusWrapper.data("video-id");
            if (status == "Uploaded" && published) {
                return;
            }
            var update = function () {
                if (!hasFocus(videoId)) {
                    return;
                }
                $.ajax({
                    url: statusUrl,
                    cache: false
                }).done(function (data) {
                    progressLabel.text(data.uploadState.percentComplete + "%");
                    uploadStatusLabel.text(data.uploadState.status);
                    publicationStatusLabel.text(data.published ? statusWrapper.data("published-text") : statusWrapper.data("draft-text"));
                    if (data.published) {
                        var mediathumbnail = $(".media-thumbnail-cloud-video[data-id=" + videoId + "]");
                        mediathumbnail.parents("li:first").find(".publication-status").hide();
                    }
                    if (data.uploadState.status == "Uploaded") {
                        uploadProgressContainer.hide();
                        return;
                    }
                    else if (data.uploadState.status == "Uploading") {
                        uploadProgressContainer.show();
                    }
                    window.setTimeout(update, 5000);
                });
            };
            update();
        });
    };
    updateUploadProgressLabel();
})(jQuery);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkbWVkaWEtbWV0YWRhdGEtY2xvdWR2aWRlb3BhcnQuanMiLCJjbG91ZG1lZGlhLW1ldGFkYXRhLWNsb3VkdmlkZW9wYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQ0xBLDRDQUE0QztBQUU1QyxDQUFDLFVBQUMsQ0FBZ0I7SUFDZCxJQUFJLFFBQVEsR0FBRyxVQUFDLE9BQWU7UUFDM0IsSUFBSSxjQUFjLEdBQVcsQ0FBQyxDQUFDLG9FQUFvRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hILE1BQU0sQ0FBQyxjQUFjLElBQUksT0FBTyxDQUFDO0lBQ3JDLENBQUMsQ0FBQztJQUVGLElBQUkseUJBQXlCLEdBQUc7UUFDNUIsSUFBSSxVQUFVLEdBQVcsQ0FBQyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFFM0UsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNaLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDN0QsSUFBSSxzQkFBc0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDeEUsSUFBSSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDOUQsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzdELElBQUksdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDM0QsSUFBSSxTQUFTLEdBQVcsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxJQUFJLE1BQU0sR0FBVyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3pELElBQUksU0FBUyxHQUFXLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEQsSUFBSSxPQUFPLEdBQVcsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVyRCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksVUFBVSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxJQUFJLE1BQU0sR0FBRztnQkFDVCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0gsR0FBRyxFQUFFLFNBQVM7b0JBQ2QsS0FBSyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVU7b0JBQ2YsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDM0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2hELHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBRXRILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMsdUNBQXVDLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUNoRixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMxRSxDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMvQixNQUFNLENBQUM7b0JBQ1gsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQzt3QkFDaEQsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ25DLENBQUM7b0JBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO1lBQ0YsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztJQUVGLHlCQUF5QixFQUFFLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiY2xvdWRtZWRpYS1tZXRhZGF0YS1jbG91ZHZpZGVvcGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlR5cGluZ3MvanF1ZXJ5LmQudHNcIiAvPlxyXG5cclxuKCgkIDogSlF1ZXJ5U3RhdGljKSA9PiB7XHJcbiAgICB2YXIgaGFzRm9jdXMgPSAodmlkZW9JZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdmFyIGZvY3VzZWRWaWRlb0lkOiBudW1iZXIgPSAkKFwiI21lZGlhLWxpYnJhcnktbWFpbi1saXN0IGxpLmhhcy1mb2N1cyAubWVkaWEtdGh1bWJuYWlsLWNsb3VkLXZpZGVvXCIpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICByZXR1cm4gZm9jdXNlZFZpZGVvSWQgPT0gdmlkZW9JZDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVwZGF0ZVVwbG9hZFByb2dyZXNzTGFiZWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lcnM6IEpRdWVyeSA9ICQoXCIjbWVkaWEtbGlicmFyeS1tYWluLWVkaXRvci1mb2N1cyAucHJvcGVydGllc1wiKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVycy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNXcmFwcGVyID0gY29udGFpbmVyLmZpbmQoXCIudXBsb2FkLXN0YXR1cy13cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICB2YXIgcHVibGljYXRpb25TdGF0dXNMYWJlbCA9IGNvbnRhaW5lci5maW5kKFwiLnB1YmxpY2F0aW9uLXN0YXR1cyBzcGFuXCIpO1xyXG4gICAgICAgICAgICB2YXIgdXBsb2FkU3RhdHVzTGFiZWwgPSBjb250YWluZXIuZmluZChcIi51cGxvYWQtc3RhdHVzLXRleHRcIik7XHJcbiAgICAgICAgICAgIHZhciBwcm9ncmVzc0xhYmVsID0gY29udGFpbmVyLmZpbmQoXCIudXBsb2FkLXByb2dyZXNzLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICB2YXIgdXBsb2FkUHJvZ3Jlc3NDb250YWluZXIgPSAkKFwiLnVwbG9hZC1wcm9ncmVzcy1zdGF0dXNcIik7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNVcmw6IHN0cmluZyA9IHN0YXR1c1dyYXBwZXIuZGF0YShcInN0YXR1cy11cmxcIik7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXM6IHN0cmluZyA9IHN0YXR1c1dyYXBwZXIuZGF0YShcInVwbG9hZC1zdGF0dXNcIik7XHJcbiAgICAgICAgICAgIHZhciBwdWJsaXNoZWQ6IHN0cmluZyA9IHN0YXR1c1dyYXBwZXIuZGF0YShcInB1Ymxpc2hlZFwiKTtcclxuICAgICAgICAgICAgdmFyIHZpZGVvSWQ6IG51bWJlciA9IHN0YXR1c1dyYXBwZXIuZGF0YShcInZpZGVvLWlkXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PSBcIlVwbG9hZGVkXCIgJiYgcHVibGlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB1cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0ZvY3VzKHZpZGVvSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHN0YXR1c1VybCxcclxuICAgICAgICAgICAgICAgICAgICBjYWNoZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pLmRvbmUoKGRhdGEgOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0xhYmVsLnRleHQoZGF0YS51cGxvYWRTdGF0ZS5wZXJjZW50Q29tcGxldGUgKyBcIiVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkU3RhdHVzTGFiZWwudGV4dChkYXRhLnVwbG9hZFN0YXRlLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHVibGljYXRpb25TdGF0dXNMYWJlbC50ZXh0KGRhdGEucHVibGlzaGVkID8gc3RhdHVzV3JhcHBlci5kYXRhKFwicHVibGlzaGVkLXRleHRcIikgOiBzdGF0dXNXcmFwcGVyLmRhdGEoXCJkcmFmdC10ZXh0XCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucHVibGlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZWRpYXRodW1ibmFpbCA9ICQoXCIubWVkaWEtdGh1bWJuYWlsLWNsb3VkLXZpZGVvW2RhdGEtaWQ9XCIgKyB2aWRlb0lkICsgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXRodW1ibmFpbC5wYXJlbnRzKFwibGk6Zmlyc3RcIikuZmluZChcIi5wdWJsaWNhdGlvbi1zdGF0dXNcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudXBsb2FkU3RhdGUuc3RhdHVzID09IFwiVXBsb2FkZWRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRQcm9ncmVzc0NvbnRhaW5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudXBsb2FkU3RhdGUuc3RhdHVzID09IFwiVXBsb2FkaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkUHJvZ3Jlc3NDb250YWluZXIuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQodXBkYXRlLCA1MDAwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB1cGRhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdXBkYXRlVXBsb2FkUHJvZ3Jlc3NMYWJlbCgpO1xyXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
